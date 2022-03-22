export const Buttons = ({ cellCount, rowCount }) => {
  return Array(rowCount)
    .fill()
    .map((i, rowIndex) => {
      return (
        <div key={rowIndex} className="flex flex-col gap-6 ">
          {Array(cellCount)
            .fill()
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
    });
};
