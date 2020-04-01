using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeLeaveMappingsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public EmployeeLeaveMappingsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/EmployeeLeaveMappings
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EmployeeLeaveMapping>>> GetemployeeLeaveMappings()
        {
            return await _context.employeeLeaveMappings.ToListAsync();
        }

        // GET: api/EmployeeLeaveMappings/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EmployeeLeaveMapping>> GetEmployeeLeaveMapping(int id)
        {
            var employeeLeaveMapping = await _context.employeeLeaveMappings.FindAsync(id);

            if (employeeLeaveMapping == null)
            {
                return NotFound();
            }

            return employeeLeaveMapping;
        }

        // PUT: api/EmployeeLeaveMappings/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmployeeLeaveMapping(int id, EmployeeLeaveMapping employeeLeaveMapping)
        {
            if (id != employeeLeaveMapping.id)
            {
                return BadRequest();
            }

            _context.Entry(employeeLeaveMapping).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeLeaveMappingExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/EmployeeLeaveMappings
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<EmployeeLeaveMapping>> PostEmployeeLeaveMapping(EmployeeLeaveMapping employeeLeaveMapping)
        {
            _context.employeeLeaveMappings.Add(employeeLeaveMapping);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEmployeeLeaveMapping", new { id = employeeLeaveMapping.id }, employeeLeaveMapping);
        }

        // DELETE: api/EmployeeLeaveMappings/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<EmployeeLeaveMapping>> DeleteEmployeeLeaveMapping(int id)
        {
            var employeeLeaveMapping = await _context.employeeLeaveMappings.FindAsync(id);
            if (employeeLeaveMapping == null)
            {
                return NotFound();
            }

            _context.employeeLeaveMappings.Remove(employeeLeaveMapping);
            await _context.SaveChangesAsync();

            return employeeLeaveMapping;
        }

        private bool EmployeeLeaveMappingExists(int id)
        {
            return _context.employeeLeaveMappings.Any(e => e.id == id);
        }
    }
}
