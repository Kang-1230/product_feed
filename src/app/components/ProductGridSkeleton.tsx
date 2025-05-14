export default function ProductGridSkeleton() {
  const skeletonArray = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ];
  return (
    <>
      <div className="grid grid-cols-4 gap-[32px] animate-pulse">
        {skeletonArray.map((_, index) => (
          <div
            key={index}
            className="flex flex-col  max-w-[1200px] border-[1px] border-[#D9D9D9] rounded-[8px]"
          >
            <div className="w-[276px] h-[218px] bg-[#D9D9D9] rounded-[8px]"></div>

            <div className="flex flex-col gap-[4px] w-[276px] h-[146px] p-[10px] ">
              <div className="w-[117px] h-[23px] bg-[#D9D9D9] rounded-[50px]"></div>
              <div className="w-[227px] h-[21px] bg-[#D9D9D9] rounded-[50px] font-semibold"></div>
              <div className="w-[249px] h-[17px] bg-[#D9D9D9] rounded-[50px]  overflow-hidden [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical]"></div>
              <div className="w-[201px] h-[17px] bg-[#D9D9D9] rounded-[50px]  overflow-hidden [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical]"></div>
              <div className="w-[58px] h-[17px] flex gap-[2px] bg-[#D9D9D9] rounded-[50px] mt-[16px]">
                <div className="text-[12px]/[18px]"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>grid스켈레톤</div>
    </>
  );
}
