/**
 * Material.App - Information Card component.
 *
 * @ 21.01.2020 # Aleksandr <developing@nodes-tech.ru>
 */

import * as React from "react";
import { ICardProps, CardPropsTypes } from "./Card.props";
import "./Card.css";

const Card: React.FunctionComponent<ICardProps> = (props) => {
    document.handler.log("Card.render()");
    return (
      <div className={"card" + (props.plain ? " card-plain" : "")}>
        <div className={"header" + (props.hCenter ? " text-center" : "")}>
            {
                props.title &&
                <h4 className="title">{props.title}</h4>
            }
            {
                props.category &&
                <p className="category">{props.category}</p>
            }
        </div>
        <div
          className={
            "content" +
            (props.ctAllIcons ? " all-icons" : "") +
            (props.ctTableFullWidth ? " table-full-width" : "") +
            (props.ctTableResponsive ? " table-responsive" : "") +
            (props.ctTableUpgrade ? " table-upgrade" : "") +
            (props.className? " "+props.className : "")
          }
        >
          {props.content}
            {
                ( props.legend || props.stats ) &&
                (
                    <div className="footer">
                        {props.legend}
                        {props.stats != null ? <hr /> : ""}
                        <div className="stats">
                            <i className={props.statsIcon} /> {props.stats}
                        </div>
                    </div>
                )
            }
        </div>
      </div>
    );
};

Card.propTypes = CardPropsTypes;

export {Card, Card as default};
