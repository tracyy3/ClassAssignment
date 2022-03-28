class Job {
  constructor(name, industry, requiresDegree, field) {
    (this.name = name),
      (this.industry = industry),
      (this.requiresDegree = requiresDegree),
      (this.field = field);
  }
  getName() {
    return this.name;
  }
  getFieldAndIndustry() {
    return this.field + this.industry;
  }
}

class MyJob extends Job {
  constructor(name, industry, requiresDegree, field) {
    super(name, industry, requiresDegree, field);
  }
}

let job1 = new Job("job1", "income1", false, "field1");
let job2 = new Job("job2", "income2", false, "field2");
let job3 = new Job("job3", "income3", false, "field3");

console.log(job1.getName() + job1.getFieldAndIndustry());
console.log(job2.getName() + job2.getFieldAndIndustry());
console.log(job3.getName() + job3.getFieldAndIndustry());

let retail = new MyJob("MyJob1", "income4", false, "field4");

console.log(retail.getName() + retail.getFieldAndIndustry());
