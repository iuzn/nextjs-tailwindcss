export const Buttons = ({
  cellCount,
  rowCount,
}: {
  cellCount: number;
  rowCount: number;
}) => {
  return (
    <>
      {Array(rowCount)
        .fill(0)
        .map((i, rowIndex) => {
          return (
            <div key={rowIndex} className="flex flex-col gap-6 ">
              {Array(cellCount)
                .fill(0)
                .map((i, cellIndex) => {
                  return (
                    <button
                      key={rowIndex + "-" + cellIndex}
                      className="button-shadow"
                    >
                      Welcome to Template!
                    </button>
                  );
                })}
            </div>
          );
        })}
    </>
  );
};
