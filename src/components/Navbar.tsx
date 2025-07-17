import Image from "next/image"

const Navbar = () => {
    return (
        <div className="flex items-center justify-between p-4">
            {/* SearchBar */}
            <div className="hidden md:flex items-center gap-2 rounded-full text-xs ring-[1.5px] ring-gray-300 px-2">
                <Image src="/search.png" alt="" height={14} width={14} />
                <input type="text" placeholder="Search..." className="w-[200px] p-2 bg-transparent outline-none" />
                
            </div>
             {/* ICONS AND USER*/}
            <div className="flex gap-4">
                <div>
                    <Image src="/message.png" alt="message" width={18} height={15}/>
                </div>
                <div>
                    <Image src="/announcement.png" alt="message" width={18} height={15}/>
                </div>
                <div className="flex flex-col p-2">
                <h3>John Doe</h3>
                <h6>Admin</h6>
                </div>
                <Image  src="/avatar.png" alt="avatar" width={16} height={16} />
            </div>
        </div>
    )
}
export default Navbar