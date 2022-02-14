const Footer = () => {
    const thisYear = new Date().getFullYear()
    return (
        <div className="flex justify-center h-[8%] bg-[#3a3a3f]">
            <p className="flex items-center text-[#cbd5e1]">© {thisYear} shin portfolio</p>
        </div>
    )
}

export default Footer
