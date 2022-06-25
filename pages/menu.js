import dynamic from "next/dynamic";


const MenuPage = dynamic(() => import("Components/Pages/MenuPage"));


const Menu = () => {
    return (
        <div>
            <MenuPage />
        </div>
    );
}

export default Menu;