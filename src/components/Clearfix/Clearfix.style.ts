/**
 * Material.App - Clearfix CSS properties.
 *
 * @ 21.01.2020 # Aleksandr <developing@nodes-tech.ru>
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
