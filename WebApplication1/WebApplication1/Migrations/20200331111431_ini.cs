using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication1.Migrations
{
    public partial class ini : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_employeeLeaveMappings_employees_Employeeid",
                table: "employeeLeaveMappings");

            migrationBuilder.DropForeignKey(
                name: "FK_employeeLeaveMappings_leaves_Leaveid",
                table: "employeeLeaveMappings");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "leaves",
                newName: "name");

            migrationBuilder.RenameColumn(
                name: "MaximumLeavesAllowed",
                table: "leaves",
                newName: "maximumLeavesAllowed");

            migrationBuilder.RenameColumn(
                name: "Leaveid",
                table: "leaves",
                newName: "leaveid");

            migrationBuilder.RenameColumn(
                name: "Salary",
                table: "employees",
                newName: "salary");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "employees",
                newName: "name");

            migrationBuilder.RenameColumn(
                name: "Email",
                table: "employees",
                newName: "email");

            migrationBuilder.RenameColumn(
                name: "DOJ",
                table: "employees",
                newName: "doj");

            migrationBuilder.RenameColumn(
                name: "DOB",
                table: "employees",
                newName: "dob");

            migrationBuilder.RenameColumn(
                name: "Employeeid",
                table: "employees",
                newName: "employeeid");

            migrationBuilder.RenameColumn(
                name: "Status",
                table: "employeeLeaveMappings",
                newName: "status");

            migrationBuilder.RenameColumn(
                name: "Leaveid",
                table: "employeeLeaveMappings",
                newName: "leaveid");

            migrationBuilder.RenameColumn(
                name: "LeaveStartDate",
                table: "employeeLeaveMappings",
                newName: "leaveStartDate");

            migrationBuilder.RenameColumn(
                name: "LeaveEndDate",
                table: "employeeLeaveMappings",
                newName: "leaveEndDate");

            migrationBuilder.RenameColumn(
                name: "Employeeid",
                table: "employeeLeaveMappings",
                newName: "employeeid");

            migrationBuilder.RenameIndex(
                name: "IX_employeeLeaveMappings_Leaveid",
                table: "employeeLeaveMappings",
                newName: "IX_employeeLeaveMappings_leaveid");

            migrationBuilder.RenameIndex(
                name: "IX_employeeLeaveMappings_Employeeid",
                table: "employeeLeaveMappings",
                newName: "IX_employeeLeaveMappings_employeeid");

            migrationBuilder.AddForeignKey(
                name: "FK_employeeLeaveMappings_employees_employeeid",
                table: "employeeLeaveMappings",
                column: "employeeid",
                principalTable: "employees",
                principalColumn: "employeeid",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_employeeLeaveMappings_leaves_leaveid",
                table: "employeeLeaveMappings",
                column: "leaveid",
                principalTable: "leaves",
                principalColumn: "leaveid",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_employeeLeaveMappings_employees_employeeid",
                table: "employeeLeaveMappings");

            migrationBuilder.DropForeignKey(
                name: "FK_employeeLeaveMappings_leaves_leaveid",
                table: "employeeLeaveMappings");

            migrationBuilder.RenameColumn(
                name: "name",
                table: "leaves",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "maximumLeavesAllowed",
                table: "leaves",
                newName: "MaximumLeavesAllowed");

            migrationBuilder.RenameColumn(
                name: "leaveid",
                table: "leaves",
                newName: "Leaveid");

            migrationBuilder.RenameColumn(
                name: "salary",
                table: "employees",
                newName: "Salary");

            migrationBuilder.RenameColumn(
                name: "name",
                table: "employees",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "email",
                table: "employees",
                newName: "Email");

            migrationBuilder.RenameColumn(
                name: "doj",
                table: "employees",
                newName: "DOJ");

            migrationBuilder.RenameColumn(
                name: "dob",
                table: "employees",
                newName: "DOB");

            migrationBuilder.RenameColumn(
                name: "employeeid",
                table: "employees",
                newName: "Employeeid");

            migrationBuilder.RenameColumn(
                name: "status",
                table: "employeeLeaveMappings",
                newName: "Status");

            migrationBuilder.RenameColumn(
                name: "leaveid",
                table: "employeeLeaveMappings",
                newName: "Leaveid");

            migrationBuilder.RenameColumn(
                name: "leaveStartDate",
                table: "employeeLeaveMappings",
                newName: "LeaveStartDate");

            migrationBuilder.RenameColumn(
                name: "leaveEndDate",
                table: "employeeLeaveMappings",
                newName: "LeaveEndDate");

            migrationBuilder.RenameColumn(
                name: "employeeid",
                table: "employeeLeaveMappings",
                newName: "Employeeid");

            migrationBuilder.RenameIndex(
                name: "IX_employeeLeaveMappings_leaveid",
                table: "employeeLeaveMappings",
                newName: "IX_employeeLeaveMappings_Leaveid");

            migrationBuilder.RenameIndex(
                name: "IX_employeeLeaveMappings_employeeid",
                table: "employeeLeaveMappings",
                newName: "IX_employeeLeaveMappings_Employeeid");

            migrationBuilder.AddForeignKey(
                name: "FK_employeeLeaveMappings_employees_Employeeid",
                table: "employeeLeaveMappings",
                column: "Employeeid",
                principalTable: "employees",
                principalColumn: "Employeeid",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_employeeLeaveMappings_leaves_Leaveid",
                table: "employeeLeaveMappings",
                column: "Leaveid",
                principalTable: "leaves",
                principalColumn: "Leaveid",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
