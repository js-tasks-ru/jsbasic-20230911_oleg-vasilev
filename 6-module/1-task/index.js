/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.elem = this.render(rows);
  }

  render(rows) {
    const table = document.createElement("table");
    const list = rows.reduce(function(outer, currentItem) {
        return outer + `
          <tr>
          <td>${currentItem.name}</td>
          <td>${currentItem.age}</td>
          <td>${currentItem.salary}</td>
          <td>${currentItem.city}</td>
          <td><button>X</button></td>
          </tr>`;
      }, '');

    table.innerHTML = `
      <table>
      <thead>
        <tr>
          <td>Имя</td>
          <td>Возраст</td>
          <td>Зарплата</td>
          <td>Город</td>
          <td></td>
        </tr>
      </thead>
      <tbody>${list}</tbody>
      </table>
    `;

    table.addEventListener('click', (e) => {
      let target = e.target;
      (target.tagName === 'BUTTON') ? target.closest('tr').remove() : 0;
    });
    
    return table;
  }
}
