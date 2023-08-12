export function DashboardCards({ state }) {
  console.log(state);
  const totalDelivered = state?.products?.reduce(
    (acc, curr) => acc + curr.delivered,
    0
  );
  const totalStock = state?.products?.reduce(
    (acc, curr) => acc + curr.stock,
    0
  );
  const lowStockItemsCount = state?.products?.reduce(
    (acc, curr) => (curr.stock <= 10 ? acc + 1 : acc),
    0
  );
  return (
    <section className="p-4 my-12 md:ml-4 md:mr-12">
      <ul className="list-none flex md:flex-row flex-col justify-start items-start p-4 gap-8">
        <DisplayCard
          quantity={totalStock}
          text={"Total Stock"}
          textColor={"text-green-500"}
        />

        <DisplayCard
          quantity={totalDelivered}
          text={"Total Delivered"}
          textColor={"text-yellow-500"}
        />
        <DisplayCard
          quantity={lowStockItemsCount}
          text={"Low Stock"}
          textColor={"text-red-500"}
        />
      </ul>
    </section>
  );
}

export function DisplayCard({ quantity, text, textColor, textStyle }) {
  return (
    <div className="rounded-md bg-gray-300/80 w-32 h-24 flex flex-col items-center justify-center gap-3">
      <h2 className={`${textColor} font-extrabold text-2xl`}>{quantity}</h2>
      <h3 className={`${textStyle}`}>{text}</h3>
    </div>
  );
}
