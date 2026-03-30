const fs = require("fs");

const data = JSON.stringify({
  name: "Employee 1 Name",
  salary: 2000,
});

fs.writeFile("employees.json", data, "utf8", (err) => {
  if (err) console.log(err);
  console.log("Dosya oluşturuldu ve veri yazıldı.");
});

fs.readFile("employees.json", "utf8", (err, data) => {
  if (err) console.log(err);
  else console.log("Okunan veri:", JSON.parse(data));
});

fs.readFile("employees.json", "utf8", (err, data) => {
  if (err) return console.log(err);

  const employee = JSON.parse(data);

  // Güncelleme
  employee.name = "Updated Employee Name";
  employee.salary = 3000;

  fs.writeFile("employees.json", JSON.stringify(employee), "utf8", (err) => {
    if (err) console.log(err);
    else console.log("Dosya güncellendi.");
  });
});

fs.unlink("employees.json", (err) => {
  if (err) console.log(err);
  else console.log("Dosya silindi.");
});