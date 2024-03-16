import React, {FC} from 'react'
import {NavLink} from 'react-router-dom'
import s from './Sidebar.module.css'
import {PATH} from '../Pages'
import closeIcon from './closeOutline.svg'
import { useLocation } from 'react-router-dom';

type PropsType = {
    open: boolean
    handleClose: () => void
}

export const Sidebar: FC<PropsType> = ({open, handleClose}) => {
    const location = useLocation();
    const sidebarClass = s.sidebar
        + (open ? ' ' + s.open : '')
    return (
        <>


            <aside className={sidebarClass}>

                <button className={s.close} onClick={handleClose}>
                    <img
                        src={closeIcon}
                        alt="close sidebar"
                        id={'hw5-menu-close'}
                    />
                </button>
                <nav id={'hw5-menu'} className={s.nav}>
                    <NavLink
                        id={'hw5-pre-junior-link'}
                        to={PATH.PRE_JUNIOR}
                        onClick={handleClose}
                       className={location.pathname === PATH.PRE_JUNIOR ? s.active : ""}
                    >
                        Pre-junior
                    </NavLink>
                    <NavLink
                        id={'hw5-junior-link'}
                        to={PATH.JUNIOR}
                        onClick={handleClose}
                        className={location.pathname === PATH.JUNIOR ? s.active : ""}
                    >
                        Junior
                    </NavLink>
                    <NavLink
                        id={'hw5-junior-plus-link'}
                        to={PATH.JUNIOR_PLUS}
                        onClick={handleClose}
                        className={location.pathname === PATH.JUNIOR_PLUS ? s.active : ""}
                    >
                        Junior Plus
                    </NavLink>
                </nav>
                {/*затемнение справа от открытого меню*/}
            {open && <div className={s.background} onClick={handleClose}/>}
            </aside>

        </>
    )
}
