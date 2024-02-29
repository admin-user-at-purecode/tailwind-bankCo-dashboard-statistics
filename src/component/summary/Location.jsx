import bra from "../../assets/images/flag/bra.png";
import fe from "../../assets/images/flag/fe.png";
import ita from "../../assets/images/flag/italy.png";

function LocationItem({ img, location, value, color }) {
    return (
        <div className="flex space-x-5 items-center">
            <div className="w-[30px]">
                <img src={img} className="w-full" alt="flag" />
            </div>
            <div className="flex-1">
                <div className="flex justify-between mb-2">
                    <span className="text-bgray-900 dark:text-white text-sm font-medium">
                        {location}
                    </span>
                    <span className="text-sm dark:text-white font-medium">
                        {value}
                    </span>
                </div>
                <div className="w-full relative h-[14px] rounded bg-bgray-100 overflow-hidden">
                    <div
                        style={{ width: `${value}` }}
                        className={`h-full absolute left-0 top-0 rounded  ${color}`}
                    ></div>
                </div>
            </div>
        </div>
    );
}

function Location() {
    return (
        <div className="flex-1 xl:block hidden">
            <div className="w-full p-5 rounded-lg bg-white dark:bg-darkblack-600 h-full">
                <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-bgray-900 dark:text-white">
                        Most Location
                    </h3>
                    <div className="flex space-x-1.5 items-center">
                        <span className="text-2xl font-bold text-bgray-900 dark:text-white">
                            76,345
                        </span>
                        <div className="w-[60px] h-[22px] rounded-full bg-success-400 flex justify-center items-center">
                            <div className="flex space-x-1 items-center">
                                <span>
                                    <svg
                                        width="10"
                                        height="7"
                                        viewBox="0 0 10 7"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0.5 5.89575L3.5 2.89575L5.5 4.89575L9.5 0.895752"
                                            stroke="white"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M6 0.895752H9.5V4.39575"
                                            stroke="white"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                                <span className="text-white text-xs font-medium">
                                    12,00%
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-sm text-bgray-600 dark:text-bgray-50 mb-8">
                    Compared to last month
                </p>
                <div className="flex flex-col space-y-8">
                    <LocationItem
                        img={fe}
                        value={"65%"}
                        color="bg-success-300"
                        location="Italy"
                    />
                    <LocationItem
                        img={bra}
                        value={"85%"}
                        color="bg-warning-100"
                        location="Brazil"
                    />
                    <LocationItem
                        img={ita}
                        value={"95%"}
                        color="bg-orange"
                        location="Italy"
                    />
                </div>
            </div>
        </div>
    );
}

export default Location;
