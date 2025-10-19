# Auth & User — Public / Auth
#### POST /api/auth/register
# 

# ثلاثه انواع من المستخدمين 
  #### Admin
  #### Provider
  #### Client



## Auth & User
POST /api/auth/register
Description: تسجيل مستخدم جديد
Auth: public

POST /api/auth/login
Description: تسجيل الدخول
Auth: public


POST /api/auth/logout
Description: إنهاء الجلسة
Auth: auth required


POST /api/auth/forgot-password
Description: طلب رابط إعادة تعيين كلمة المرور
Auth: public


POST /api/auth/reset-password
Description: إعادة تعيين كلمة المرور بواسطة توكن
Auth: public

---

## Articles / Posts

# المسموح لهم بانشاء مقالات 
  #### Admin
  #### Provider


GET /api/posts
Description: قائمة المقالات (pagination, search, filter)
Auth: public
Query: page, limit, q, tag, authorId, sort

GET /api/posts/:id
Description: تفاصيل مقال
Auth: public


POST /api/posts
Description: إنشاء مقال
Auth: admin/provider

PUT /api/posts/:id
Description: تعديل مقال
Auth: owner/admin


DELETE /api/posts/:id
Description: حذف مقال
Auth: owner/admin

POST /api/posts/:id/like
Description: إضافة لايك لمقال
Auth: public

---

## Comments 

GET /api/posts/:postId/comments
Description: جلب تعليقات المقال (هيكل شجري)
Auth: public

POST /api/posts/:postId/comments
Description: إضافة تعليق أو رد
Auth: optional (or required based on config)

PUT /api/comments/:id
Description: تعديل تعليق
Auth: author/admin

DELETE /api/comments/:id
Description: حذف تعليق
Auth: author/admin/owner

POST /api/comments/:id/like
Description: لايك لتعليق
Auth: public


---

## Services & Providers

GET /api/providers
Description: قائمة مقدمي الخدمات (search, filter)
Auth: public

GET /api/providers/:id
Description: ملف مزود مفصّل
Auth: public

POST /api/providers
Description: إنشاء مزود (admin)
Auth: user He Can Choose

PUT /api/providers/:id
Description: تعديل مزود (owner/admin)
Auth: provider/admin

DELETE /api/providers/:id
Description: حذف مزود (admin)
Auth: admin


POST /api/providers/:id/reviews
Description: إضافة مراجعة للمزود
Auth: client required

POST /api/providers/:id/request
Description: إرسال طلب خدمة لمزود
Auth: client required

Notes: answers تحفظ مع الطلب لعرضها على المزود

---

## Provider profile & Custom Questions

GET /api/providers/:id/profile
Description: جلب ملف مزود مع أسئلته المخصصة
Auth: public

PUT /api/providers/:id/profile
Description: تعديل الملف الشخصي
Auth: provider/admin


GET /api/providers/:id/questions
Description: جلب قائمة أسئلة المزود
Auth: provider/admin or public (depending on design)

POST /api/providers/:id/questions
Description: إضافة سؤال مخصص (يظهر للعميل عند إنشاء طلب)
Auth: provider

PUT /api/providers/:id/questions/:questionId
Description: تعديل سؤال
Auth: provider/admin


DELETE /api/providers/:id/questions/:questionId
Description: حذف سؤال
Auth: provider/admin



## Service Requests / Orders

GET /api/requests
Description: جلب الطلبات (لمزود/للمشرف حسب الدور)
Auth: provider/admin


POST /api/requests
Description: إنشاء طلب خدمة
Auth: client required

PUT /api/requests/:id
Description: تحديث حالة أو تفاصيل الطلب (accept/decline/complete)
Auth: provider/admin

DELETE /api/requests/:id
Description: حذف/إلغاء الطلب

---

## Contact / Messages

POST /api/contact
Description: إرسال رسالة من نموذج الاتصال
Auth: public

GET /api/contact
Description: جلب الرسائل (admin)
Auth: admin

---

## Content: Team, Portfolio, Events, Testimonials

GET /api/team
GET /api/team/:id
GET /api/portfolio
GET /api/events
GET /api/testimonials
Description: Endpoints بسيطة لعرض المحتوى
Auth: public
Admin CRUD متاح حسب الحاجة

---

## Media / Uploads

POST /api/uploads
Description: رفع ملف (صورة مثلاً)
Auth: provider/admin
