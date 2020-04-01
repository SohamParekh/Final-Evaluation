using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication1.Migrations
{
    public partial class elm : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_employeeLeaveMappings_employees_employeeid",
                table: "employeeLeaveMappings");

            migrationBuilder.DropForeignKey(
                name: "FK_employeeLeaveMappings_leaves_leaveid",
                table: "employeeLeaveMappings");

            migrationBuilder.DropIndex(
                name: "IX_employeeLeaveMappings_employeeid",
                table: "employeeLeaveMappings");

            migrationBuilder.DropIndex(
                name: "IX_employeeLeaveMappings_leaveid",
                table: "employeeLeaveMappings");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_employeeLeaveMappings_employeeid",
                table: "employeeLeaveMappings",
                column: "employeeid");

            migrationBuilder.CreateIndex(
                name: "IX_employeeLeaveMappings_leaveid",
                table: "employeeLeaveMappings",
                column: "leaveid");

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
    }
}
