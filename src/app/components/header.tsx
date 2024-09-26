
export default function Header() {
    return <header className=" p-4 px-5 rounded-2xl flex flex-col md:flex-row  w-100 gap-4 justify-between items-center shadow bg-primary ">
        <div className="flex flex-col md:flex-row items-center gap-4 justify-start">
            <button className="button button-white w-full md:w-max">Share</button>
            <button className="button text-red-600 bg-red-100 w-full md:w-max">Report</button>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 justify-start">
            <button className="button button-white w-full md:w-max">Print</button>
            <button className="button button-secondary w-full md:w-max">Shipment Complete</button>
        </div>
    </header>


}