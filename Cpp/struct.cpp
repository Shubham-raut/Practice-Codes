#include <iostream>
using namespace std;

struct Employee
{
    //private members
private:
    char name[10];
    int id;
    int sal;

    //public members
public:
    void getData()
    {
        cout << "Enter Name: ";
        cin >> name;
        cout << "Enter ID: ";
        cin >> id;
        cout << "Enter Salary: ";
        cin >> sal;
    }

    void putData()
    {
        cout << "\nName is: " << name << '\n';
        cout << "Id is: " << id << '\n';
        cout << "Salary is: " << sal << '\n';
    }

    void out();
};

//outside struct-function definition
void Employee::out()
{
    cout << "\n\nIncide out\n\n";
}
//global function
// struct Employee getData();
// void putData(struct Employee e);

int main()
{

    struct Employee e;
    // e=getData();
    // putData(e);
    e.getData();
    e.putData();

    cout << "\n\nNew Struct\n";
    struct Employee e2;
    // e2.id = 123;
    // e2.sal = 1010;
    e2.putData();
    e2.out();
    return 0;
}

// struct Employee getData(){
//     struct Employee e;
//     cout<<"Enter ID: ";
//     cin>>e.id;
//     cout<<"Enter Salary: ";
//     cin>>e.sal;
//     return e;
// }

// void putData(struct Employee e){
//     cout<<"Id is: "<<e.id<<'\n';
//     cout<<"Salary is: "<<e.sal<<'\n';
// }