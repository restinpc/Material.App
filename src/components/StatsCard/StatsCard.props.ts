/**
 * Material.App - StatsCard props.
 *
 * @ 06.02.2020 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import {ReactElement} from "react";

interface IStatsCardProps{
    hasBorder: boolean,
    bigIcon: ReactElement,
    statsText: string,
    statsValue: string,
    statsIcon?: ReactElement,
    statsIconText?: string
}

export {IStatsCardProps}
