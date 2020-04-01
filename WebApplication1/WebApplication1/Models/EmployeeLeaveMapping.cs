using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class EmployeeLeaveMapping
    {
        [Key]
        public int id { get; set; }
        [ForeignKey("Employeeid")]
        public int employeeid { get; set; }
        [ForeignKey("Leaveid")]
        public int leaveid { get; set; }
        public string leaveStartDate { get; set; }
        public string leaveEndDate { get; set; }
        public string status { get; set; }
        public Employee employee { get; set; }
        public Leave leave { get; set; }
    }
}
