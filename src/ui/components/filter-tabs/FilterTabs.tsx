import styles from "./FilterTabs.module.scss";

type Props = {
  activeFilter: string;
  onFilterChange: (key: string) => void;
  counts: { all: number; active: number; completed: number };
};

function FilterTabs({ activeFilter, onFilterChange, counts }: Props) {
  const filters = [
    { key: "all", label: "All", count: counts.all },
    { key: "active", label: "Active", count: counts.active },
    { key: "completed", label: "Completed", count: counts.completed },
  ];

  return (
    <div className={styles.filter_tabs}>
      {filters.map((filter) => (
        <button
          key={filter.key}
          onClick={() => onFilterChange(filter.key)}
          className={`${styles.filter_tabs__button} ${
            activeFilter === filter.key
              ? `${styles.filter_tabs__button__active}`
              : ""
          }`}
        >
          {filter.label} ({filter.count})
        </button>
      ))}
    </div>
  );
}

export default FilterTabs;
