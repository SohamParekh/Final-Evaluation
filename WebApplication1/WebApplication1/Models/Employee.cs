using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class Employee
    {
        [Key]
        public int employeeid { get; set; }
        public string name { get; set; }
        public string dob { get; set; }
        public string doj { get; set; }
        public int salary { get; set; }
        public string email { get; set; }
        public string password { get; set; }
    }
}
