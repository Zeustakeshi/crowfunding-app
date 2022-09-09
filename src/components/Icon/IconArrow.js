export const IconArrow = ({ direction = "down" }) => {
    switch (direction) {
        case "down":
            return (
                <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M1 1L6 6L11 1"
                        stroke="currentcolor"
                        strokeWidth="2"
                    />
                </svg>
            );
        case "right":
            return (
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 17L15 12L10 7"
                        stroke="currentcolor"
                        strokeWidth="2"
                    />
                </svg>
            );
        case "left":
            return (
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M15 7L10 12L15 17"
                        stroke="currentcolor"
                        strokeWidth="2"
                    />
                </svg>
            );
        default:
            return;
    }
};
export default IconArrow;
