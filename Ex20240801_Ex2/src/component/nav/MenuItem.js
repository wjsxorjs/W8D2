import Link from "next/link";

export default function MenuItem(){
    const link_item = [
        {title: "HOME", path: "/"},
        {title: "CONTENT", path: "/content"},
        {title: "BLOG", path: "/blog"},
        {title: "ABOUT", path: "/about"}
    ]
    return(
        <>
            {link_item.map((item)=>(
                <span key = {item.title}>
                    &nbsp;&nbsp;|&nbsp;&nbsp;
                    <Link key={item.title} href={item.path}>{item.title}</Link>
                    &nbsp;&nbsp;|&nbsp;&nbsp;
                </span>
            ))}
        </>
    );
}