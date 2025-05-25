import React, { useState, Children, cloneElement, isValidElement } from 'react';
import { ChevronDownIcon } from 'lucide-react';
interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
  icon?: React.ReactNode;
  color?: 'sky' | 'emerald' | 'amber' | 'purple' | 'rose' | 'slate';
}
export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  isOpen = false,
  onToggle,
  icon,
  color = 'sky'
}) => {
  const [isOpenInternal, setIsOpenInternal] = useState(isOpen);
  const handleToggle = () => {
    if (onToggle) {
      onToggle();
    } else {
      setIsOpenInternal(!isOpenInternal);
    }
  };
  const open = onToggle ? isOpen : isOpenInternal;
  const colorClasses = {
    sky: {
      active: 'border-sky-200 bg-sky-50',
      title: 'text-sky-800',
      hover: 'hover:bg-sky-50',
      icon: 'text-sky-500'
    },
    emerald: {
      active: 'border-emerald-200 bg-emerald-50',
      title: 'text-emerald-800',
      hover: 'hover:bg-emerald-50',
      icon: 'text-emerald-500'
    },
    amber: {
      active: 'border-amber-200 bg-amber-50',
      title: 'text-amber-800',
      hover: 'hover:bg-amber-50',
      icon: 'text-amber-500'
    },
    purple: {
      active: 'border-purple-200 bg-purple-50',
      title: 'text-purple-800',
      hover: 'hover:bg-purple-50',
      icon: 'text-purple-500'
    },
    rose: {
      active: 'border-rose-200 bg-rose-50',
      title: 'text-rose-800',
      hover: 'hover:bg-rose-50',
      icon: 'text-rose-500'
    },
    slate: {
      active: 'border-slate-200 bg-slate-50',
      title: 'text-slate-800',
      hover: 'hover:bg-slate-50',
      icon: 'text-slate-500'
    }
  };
  return <div className={`border rounded-lg mb-3 overflow-hidden transition-colors duration-200 ${open ? colorClasses[color].active : 'border-slate-200'}`}>
      <button className={`w-full text-right py-4 px-5 flex items-center justify-between transition-colors duration-200 ${colorClasses[color].hover}`} onClick={handleToggle} aria-expanded={open}>
        <div className="flex items-center">
          {icon && <span className={`ml-3 ${colorClasses[color].icon}`}>{icon}</span>}
          <h3 className={`font-medium ${open ? colorClasses[color].title : 'text-slate-700'}`}>
            {title}
          </h3>
        </div>
        <ChevronDownIcon className={`h-5 w-5 transition-transform duration-300 ${colorClasses[color].icon} ${open ? 'transform rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96' : 'max-h-0'}`}>
        <div className="p-5 border-t border-slate-200">{children}</div>
      </div>
    </div>;
};
interface AccordionProps {
  children: React.ReactNode;
  allowMultiple?: boolean;
}
export const Accordion: React.FC<AccordionProps> = ({
  children,
  allowMultiple = false
}) => {
  const [openIndices, setOpenIndices] = useState<number[]>([]);
  const handleToggle = (index: number) => {
    if (allowMultiple) {
      setOpenIndices(prev => prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]);
    } else {
      setOpenIndices(prev => prev.includes(index) ? [] : [index]);
    }
  };
  const childrenWithProps = Children.map(children, (child, index) => {
    if (isValidElement(child)) {
      return cloneElement(child, {
        isOpen: openIndices.includes(index),
        onToggle: () => handleToggle(index)
      });
    }
    return child;
  });
  return <div className="space-y-3">{childrenWithProps}</div>;
};