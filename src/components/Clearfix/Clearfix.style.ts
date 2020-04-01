/**
 * Material.App - Clearfix CSS properties.
 *
 * @ 21.01.2020 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */


const clearfixStyles = {
    clearfix: {
        "&:after,&:before": {
            display: "table",
            content: '" "'
        },
        "&:after": {
            clear: "both"
        }
    }
};

export default clearfixStyles;
