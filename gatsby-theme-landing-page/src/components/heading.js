import React from "react";
import * as styles from "./heading.module.css";

export default function Heading({
  children,
  as,
  secondary,
  center,
  banner,
  bannerHeading,
  className = "",
  ...rest
}) {
  if (!children) return null;

  const classNames = [styles.heading];
  if (className) classNames.push(className);
  if (secondary) classNames.push(styles.secondary);
  if (center) classNames.push(styles.center);
  if (banner) classNames.push(styles.banner);
  if (bannerHeading) classNames.push(styles.bannerHeading);

  /*
   Uses `as` prop for heading element. If not provided, defaults to
   h2 for standard and h3 for secondary
  */
  let Component = secondary ? "h3" : "h2";
  if (as) Component = as;

  return (
    <Component className={classNames.join(" ")} {...rest}>
      {children}
    </Component>
  );
}
