let data = [];

function submitForm(event)
{
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const score = document.getElementById('score').value.trim();

    const marks = Number(score);

    if(isNaN(marks) || marks<0 || marks>100)
    {
        alert("Please enter valid details.");
        return;
    }

    let grade = "";
    if(marks >= 90 && marks <=100)
        grade =  'Grade A';
    else if(marks >= 75)
        grade =  'Grade B';
    else if(marks >= 50)
        grade =  'Grade C';
    else if(marks >= 35)
        grade = 'Grade D';
    else grade =  'Fail';

    const stud = {name , subject , marks , grade};
    data.push(stud);

    console.log("Student list: ");
    data.forEach((s,index) => {
        console.log(`${index + 1}. Name : ${s.name}\n Subject : ${s.subject}\nScore : ${s.marks}\n Grade : ${s.grade}`);
    });
}

function clearForm()
{
    document.getElementById('name').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('score').value = '';

    data = [];
    console.clear();
}