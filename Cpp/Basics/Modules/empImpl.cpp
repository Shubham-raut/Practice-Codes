#include <iostream>
using namespace std;

#include "./emp.h"

Employee::Employee()
{
    id = 10;
    salary = 50000;
}

Employee::Employee(int id, int salary)
{
    this->id = id;
    this->salary = salary;
}

void Employee::accept()
{
    cout << "Enter id: ";
    cin >> id;
    cout << "Enter salary: ";
    cin >> salary;
}

void Employee::disp()
{
    cout << "Id= " << this->id << " salary= " << this->salary << endl;
}