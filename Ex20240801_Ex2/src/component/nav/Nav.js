import Link from "next/link";
import MenuItem from "./MenuItem";

export default function Header(){
    return(
        <>
            <div>LOGO</div>
            <div className="nav">
                {/* <Link href="/">HOME</Link>
                &nbsp;&nbsp;||&nbsp;&nbsp;
                <Link href="/content">CONTENT</Link>
                &nbsp;&nbsp;||&nbsp;&nbsp;
                <Link href="/blog">BLOG</Link>
                &nbsp;&nbsp;||&nbsp;&nbsp;
                <Link href="/about">ABOUT</Link> */}
                <MenuItem />
            </div>
        </>
    );
}