
function Text({children}) {
  return (
    <div
      className="h-screen flex justify-center"
    >
      <span className="text-blue-500">
      {children}
      </span>
    </div>
  )
}
export default Text
