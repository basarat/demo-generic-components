type TableProps<TItem> = {
  items: TItem[];
  renderItem: (item: TItem) => React.ReactNode;
}

function Table<TItem>(props: TableProps<TItem>) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {props.items.map((x, i) =>
        <div key={i} style={{ display: 'block' }}>
          {props.renderItem(x)}
        </div>
      )}
    </div>
  );
}

type Data = { name: string, location: string };

function App() {
  return (
    <Table<Data>
      items={[
        { name: 'Alpha', location: 'Australia' },
        { name: 'Beta', location: 'America' },
        { name: 'Gamma', location: 'India' }
      ]}
      renderItem={(item) => item.location === 'America' ? <strong>{item.name}</strong> : item.name}
    />
  );
}

export default App;
