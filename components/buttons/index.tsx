import type { PropsWithChildren } from "react";

export type WithChildren<T = {}> = T & PropsWithChildren<{}>;
interface ButtonsProps extends WithChildren {
  cellCount: number;
  rowCount: number;
}
export const Buttons = ({ cellCount, rowCount, children }: ButtonsProps) => {
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
                      {children}
                    </button>
                  );
                })}
            </div>
          );
        })}
    </>
  );
};
