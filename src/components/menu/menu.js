import React, { useRef, useState, useEffect } from "react";

import './menu.css';
const Menu = ({ actions, onMenuAction, text }) => {

    const [showMenu, setShowMenu] = useState(false);
    const [menuItemClicked, setMenuItemClicked] = useState(false);
    const contextMenu = useRef(null);
    const menuWrapper = useRef(null);

    useEffect(() => {
        let menu = contextMenu.current;
        window.addEventListener('click', () => {
            if (!menuItemClicked && showMenu) {
                setShowMenu(() => false);
                setMenuItemClicked(() => false);
            };
        }, { once: true });

        if (contextMenu.current) {
            let menuTray = menuWrapper.current;
            menu.addEventListener('click', () => {
                setMenuItemClicked(() => true);
            }, { once: true });

            /** alsways position menu tray in-view */
            let menuLeft = menu.offsetLeft;
            let offsetLimit = Math.floor(window.innerWidth / 2);
            if (menuLeft > 0 && menuLeft < offsetLimit) {
                menuTray.style.right = `-${menuLeft}px`;
            }
        }

    }, [showMenu, menuItemClicked]);

    const toggleMenuDisplay = () => {
        setShowMenu(showMenu => !showMenu);
    }

    const selectAction = (action) => {
        onMenuAction(action);
        toggleMenuDisplay();
    }

    const simulateWindowClick = () => {
        toggleMenuDisplay();
        window.dispatchEvent(new MouseEvent("click"));
    }

    return <>
        <div className="rd-menu-label" onClick={e => simulateWindowClick()}>{text || '...'}</div>
        {actions ? <div>
            {showMenu ?
                <div ref={contextMenu} className="rd-menu-wrapper">
                    <div ref={menuWrapper} className="rd-menu-tray">
                        <ul>
                            {(actions || []).map((action, index) => <li key={index} onClick={e => {
                                e.stopPropagation();
                                selectAction(action)
                            }}>{action}</li>)}
                        </ul>
                    </div>
                </div>
                :
                <div></div>
            }
        </div> : <></>}
    </>
}

export default Menu;