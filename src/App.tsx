type Data = { name: string, location: string };

function App() {
  return (
    <List<Data>
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

type ListProps<TItem> = {
  items: TItem[];
  renderItem: (item: TItem) => React.ReactNode;
}

function List<TItem>(props: ListProps<TItem>) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {props.items.map((x, i) =>
        <div key={i}>
          {props.renderItem(x)}
        </div>
      )}
    </div>
  );
}