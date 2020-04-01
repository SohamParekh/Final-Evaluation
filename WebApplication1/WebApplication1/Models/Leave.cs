using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class Leave
    {
        [Key]
        public int leaveid { get; set; }
        public string name { get; set; }
        public string maximumLeavesAllowed { get; set; }
    }
}
