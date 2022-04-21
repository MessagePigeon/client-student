using System;
using System.CodeDom;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace MessagePigeonClientStudentPopup
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            bool delayTimeParseSuccess = uint.TryParse(delayTimeInput.Text, out uint delayTime);
            bool messageIdParseSuccess = uint.TryParse(messageIdInput.Text, out uint messageId);
            if (!delayTimeParseSuccess)
            {
                MessageBox.Show(@"时间必须为数字", @"时间错误", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }

            if (!messageIdParseSuccess && closeRequestCheckBox.Checked)
            {
                MessageBox.Show(@"消息ID必须为数字", @"消息ID错误", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }

            var popupForm = new Form2(teacherNameInput.Text, messageInput.Text, delayTime,
                closeRequestCheckBox.Checked, tokenInput.Text, messageId, baseUrlInput.Text);
            popupForm.Show();
        }

        private void closeRequestCheckBox_CheckedChanged(object sender, EventArgs e)
        {
            baseUrlInput.Enabled = closeRequestCheckBox.Checked;
            tokenInput.Enabled= closeRequestCheckBox.Checked;
            messageIdInput.Enabled= closeRequestCheckBox.Checked;
        }
    }
}