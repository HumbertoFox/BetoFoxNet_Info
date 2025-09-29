import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { iconsProps } from '@/components/Interfaces/interfaces';

library.add(fas, far, fab);

export default function Icon({
    icon,
    className = '',
    ...props
}: iconsProps) {
    return <FontAwesomeIcon
        icon={icon}
        className={className}
        aria-hidden={!props.title}
        {...props}
    />
}