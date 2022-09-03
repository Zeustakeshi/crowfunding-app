const classNames = (...args) => {
    return args
        .reduce((acc, val) => {
            if (typeof val === "string") {
                return acc.concat(val.split(" "));
            } else if (typeof val === "object") {
                return acc.concat(Object.values(val));
            }
            return acc.concat("");
        }, [])
        .join(" ");
};

export default classNames;
