export default function Navigation({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <nav className='bg-none flex flex-row w-full p-5 justify-evenly items-center'>
      {children}
    </nav>
  )
}
