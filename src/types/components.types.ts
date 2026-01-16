// src/types/components.types.ts
export interface BaseComponentProps {
  className?: string;
  'data-testid'?: string;
  'aria-label'?: string;
}

export interface CityFilterProps extends BaseComponentProps {
  showLabel?: boolean;
}

export interface SearchBarProps extends BaseComponentProps {
  placeholder?: string;
  debounceDelay?: number;
}

export interface PaginationProps extends BaseComponentProps {
  showPageNumbers?: boolean;
  showInfo?: boolean;
}

export interface UserDetailsProps extends BaseComponentProps {
  showCloseButton?: boolean;
}

export interface UsersTableProps extends BaseComponentProps {
  onRowClick?: (userId: number) => void;
  showId?: boolean;
}