import classNames from 'classnames';
import Image from 'next/image';
import {
  ReactNode,
  WheelEventHandler,
  useRef,
  useState,
  useEffect,
  UIEvent,
} from 'react';
import styles from './DropdownSelect.module.css';

type DropdownSelectProps = {
  readonly className?: string;
  readonly children: ReactNode;
};

export function DropdownSelect({ className, children }: DropdownSelectProps) {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isScrollable, setIsScrollable] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleScroll = (event: UIEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    if (target.scrollTop > 0) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  const handleWheel: WheelEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
  };

  useEffect(() => {
    const checkIfScrollable = () => {
      const el = dropdownRef.current;
      if (el) {
        setIsScrollable(el.scrollHeight > el.clientHeight);
      }
    };

    checkIfScrollable();
    window.addEventListener('resize', checkIfScrollable);

    return () => {
      window.removeEventListener('resize', checkIfScrollable);
    };
  }, [children]);

  const scrollToBottom = () => {
    const dropdownEl = dropdownRef.current;
    if (dropdownEl) {
      dropdownEl.scrollTo({
        top: dropdownEl.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={classNames(styles['dropdown-select'], className)}>
      <div
        className={classNames(styles['dropdown-select__options'])}
        onScroll={handleScroll}
        onWheel={handleWheel}
        ref={dropdownRef}
      >
        {children}
      </div>
      <div className={styles['dropdown-select__gradient']} />
      <button
        className={classNames(styles['dropdown-select__arrow-indicator'], {
          [styles['dropdown-select__arrow-indicator--hidden']]: !hasScrolled,
        })}
        onClick={scrollToBottom}
      >
        <span className={styles['rotate-arrow']}>
          <Image
            src={'/dropdown-arrow.svg'}
            alt="dropdown arrow"
            width={26}
            height={26}
          />
        </span>{' '}
      </button>
    </div>
  );
}
