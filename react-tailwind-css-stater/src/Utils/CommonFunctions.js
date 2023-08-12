export function getActiveClassName(isActive, isPending) {
  return isPending
    ? "pending p-4  w-full md:w-auto"
    : isActive
    ? "font-bold text-slate-100 p-4  w-full md:w-auto md:bg-inherit md:text-gray-100"
    : "text-gray-100 p-4 w-full md:w-auto md:bg-inherit";
}
