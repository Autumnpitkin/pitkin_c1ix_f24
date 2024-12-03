<script>
  const items = document.querySelectorAll('.items p');
  const bins = document.querySelectorAll('.bin');

  items.forEach(item => {
    item.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text', e.target.textContent);
    });
  });

  bins.forEach(bin => {
    bin.addEventListener('dragover', e => e.preventDefault());
    bin.addEventListener('drop', e => {
      const text = e.dataTransfer.getData('text');
      e.target.innerHTML += `<p>${text}</p>`;
    });
  });
</script>