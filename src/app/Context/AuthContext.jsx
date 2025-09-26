"use client";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const storeUser = localStorage.getItem("user");

        if (storeUser) {
            setUser(JSON.parse(storeUser));
        }
    }, []);

    const login = (email, password) => {
        const fakeUser = { email, password };
        setUser(fakeUser);
        localStorage.setItem("user", JSON.stringify(fakeUser));

        // لو في redirect URL خزناه → امش ليهو
        const redirectTo = localStorage.getItem("redirectAfterLogin") || "/";
        localStorage.removeItem("redirectAfterLogin"); // امسحو بعد الاستخدام
        router.push(redirectTo);
    };

    const register = (email, password) => {
        const newUser = { email, password };

        setUser(newUser);
        localStorage.setItem("user", JSON.stringify(newUser));

        const redirectTo = localStorage.getItem("redirectAfterLogin") || "/";
        localStorage.removeItem("redirectAfterLogin");

        router.push(redirectTo);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
        router.push("/");
    };

    const requireAuth = (currentPath) => {
        if (!user) {
            // خزّن الصفحة الحالية عشان نرجع ليها بعد تسجيل الدخول
            localStorage.setItem("redirectAfterLogin", currentPath);
            router.push("/login");
        }
    };
    return (
        <AuthContext.Provider
            value={{ user, login, register, logout, requireAuth }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth() {
    return useContext(AuthContext);
}

export default AuthProvider;
