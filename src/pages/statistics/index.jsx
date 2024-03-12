import ListTab from "../../component/listTab";
import Wallet from "../../component/wallet";
import Calender from "../../component/calender";
import Efficiency from "../../component/revenueFlow/Efficiency";
import SummaryV2 from "../../component/summary/SummaryV2";
import LocationV2 from "../../component/location";
import TaskSummary from "../../component/summary/TaskSummary";

function Statistics() {
  return (
    <main className="w-full px-6 pb-6 pt-[100px] sm:pt-[156px] xl:px-12 xl:pb-12">
      <div className="2xl:flex 2xl:space-x-[48px]">
        <section className="2xl:flex-1 2xl:mb-0 mb-6">
          <div className="w-full mb-[24px] xl:flex xl:space-x-[24px]">
            <SummaryV2 />
          </div>
          <Efficiency height="h-[180px]" />
          <br />

          <div className="w-full mb-[24px] flex space-x-[24px]">
            <LocationV2 />
          </div>
          <TaskSummary />
          <br />
          <ListTab />
          <br />
        </section>
      </div>
      <Wallet />
      <Calender />
    </main>
  );
}

export default Statistics;
