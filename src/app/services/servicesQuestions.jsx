export const serviceQuestions = {
  "Logo Design": [
    {
      name: "description",
      label: "وصف المشروع",
      type: "textarea",
      required: true,
    },
    { name: "color", label: "اللون المفضل", type: "text", required: false },
  ],
  "UI/UX Design": [
    {
      name: "description",
      label: "وصف المشروع",
      type: "textarea",
      required: true,
    },
    { name: "color", label: "اللون المفضل", type: "text", required: false },
    { name: "pages", label: "عدد الصفحات", type: "number", required: true },
    {
      name: "features",
      label: "الميزات المطلوبة",
      type: "textarea",
      required: true,
    },
  ],
  "Web Development": [
    {
      name: "description",
      label: "وصف المشروع",
      type: "textarea",
      required: true,
    },
    { name: "pages", label: "عدد الصفحات", type: "number", required: true },
    {
      name: "features",
      label: "الميزات المطلوبة",
      type: "textarea",
      required: false,
    },
    {
      name: "platform",
      label: "رابط تصميم Figma",
      type: "file",
      required: true,
    },
  ],
  "Mobile App": [
    {
      name: "description",
      label: "وصف المشروع",
      type: "textarea",
      required: true,
    },
    {
      name: "platform",
      label: "المنصة المستهدفة (iOS/Android)",
      type: "text",
      required: true,
    },
    {
      name: "platform",
      label: "رابط تصميم Figma",
      type: "file",
      required: true,
    },
    {
      name: "features",
      label: "الميزات المطلوبة",
      type: "textarea",
      required: false,
    },
  ],
};
