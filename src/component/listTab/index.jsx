import Pagination from "../Pagination";
import FilterFull from "../forms/FilterFull";
import UserTab from "./UserTab";

function ListTab({ pageSize }) {
  return (
    <div className="w-full rounded-lg bg-white px-[24px] py-[20px] dark:bg-darkblack-600">
      <div className="flex flex-col space-y-5">
        <div className="flex h-[56px] w-full space-x-4"></div>
        <FilterFull />
        <UserTab pageSize={pageSize} />
        <Pagination />
      </div>
    </div>
  );
}

export default ListTab;
