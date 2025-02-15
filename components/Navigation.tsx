import * as motion from 'motion/react-client'

export default function Navigation({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      transition={{ duration: 2.5 }}
      className="bg-none flex flex-row w-full p-10 gap-8 justify-center items-center lowercase"
    >
      {children}
    </motion.nav>
  )
}
