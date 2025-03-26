import React from "react";
import { Button, buttonVariants } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { CallToActionButton } from "../shared/Buttons";
// import { Link } from "lucide-react";

export const Header = () => {

    const navigate = useNavigate()

    return (
        <div className="flex w-full justify-between items-center px-20 py-10 bg-background shadow-lg">
            <div>
                <h1 className="text-3xl font-bold" onClick={()=>navigate("/")} >LearnHub</h1>
            </div>
            <nav className="">
                <ul className="flex  gap-10">
                    <Button variant="link">
                        <Link to={"/"}>Home</Link>{" "}
                    </Button>
                    <Button variant="link">
                        <Link to={"/about"}>About</Link>{" "}
                    </Button>
                    <Button variant="link">
                        <Link to={"/contact"}>Contact</Link>{" "}
                    </Button>
                    <Button variant="link">
                        <Link to={"/courses"}>Courses</Link>{" "}
                    </Button>
                </ul>
            </nav>
            <div className="flex gap-5">
                <Button variant="outline" size="lg">Log-in</Button>
                <CallToActionButton value="Join us" />
            </div>
        </div>
    );
};
