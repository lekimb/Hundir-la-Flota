export default function Leyenda() {
    const leyenda = [
        { color: "bg-blue-300", representa: "Agua" },
        { color: "bg-orange-300", representa: "Tocado" },
        { color: "bg-red-400", representa: "Hundido" },
    ];
    return (
        <ul className="flex gap-4 w-fit mt-5 mb-20 items-center">
            {leyenda.map((item, index) => {
                return (
                    <li key={index} className="text-slate-500 flex gap-2">
                        <span className={` size-5 ${item.color}`}></span>
                        {item.representa}
                    </li>
                );
            })}
        </ul>
    );
}
