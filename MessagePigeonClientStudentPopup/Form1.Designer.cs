namespace MessagePigeonClientStudentPopup
{
    partial class Form1
    {
        /// <summary>
        /// 必需的设计器变量。
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// 清理所有正在使用的资源。
        /// </summary>
        /// <param name="disposing">如果应释放托管资源，为 true；否则为 false。</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows 窗体设计器生成的代码

        /// <summary>
        /// 设计器支持所需的方法 - 不要修改
        /// 使用代码编辑器修改此方法的内容。
        /// </summary>
        private void InitializeComponent()
        {
            this.button1 = new System.Windows.Forms.Button();
            this.label1 = new System.Windows.Forms.Label();
            this.delayTimeInput = new System.Windows.Forms.TextBox();
            this.messageInput = new System.Windows.Forms.TextBox();
            this.titleInput = new System.Windows.Forms.TextBox();
            this.label2 = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // button1
            // 
            this.button1.Font = new System.Drawing.Font("微软雅黑", 9F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(134)));
            this.button1.Location = new System.Drawing.Point(271, 267);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(72, 26);
            this.button1.TabIndex = 3;
            this.button1.Text = "POPUP";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("微软雅黑", 10.5F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(134)));
            this.label1.Location = new System.Drawing.Point(27, 269);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(151, 20);
            this.label1.TabIndex = 1;
            this.label1.Text = "Close Delay Time (s) :";
            // 
            // delayTimeInput
            // 
            this.delayTimeInput.Font = new System.Drawing.Font("微软雅黑", 10.5F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(134)));
            this.delayTimeInput.Location = new System.Drawing.Point(184, 266);
            this.delayTimeInput.MaxLength = 3;
            this.delayTimeInput.Name = "delayTimeInput";
            this.delayTimeInput.Size = new System.Drawing.Size(61, 26);
            this.delayTimeInput.TabIndex = 2;
            this.delayTimeInput.Text = "0";
            // 
            // messageInput
            // 
            this.messageInput.Font = new System.Drawing.Font("微软雅黑", 10.5F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(134)));
            this.messageInput.Location = new System.Drawing.Point(26, 46);
            this.messageInput.MaxLength = 99999;
            this.messageInput.Multiline = true;
            this.messageInput.Name = "messageInput";
            this.messageInput.ScrollBars = System.Windows.Forms.ScrollBars.Vertical;
            this.messageInput.Size = new System.Drawing.Size(317, 214);
            this.messageInput.TabIndex = 1;
            this.messageInput.Text = "Test Message";
            // 
            // titleInput
            // 
            this.titleInput.Font = new System.Drawing.Font("微软雅黑", 10.5F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(134)));
            this.titleInput.Location = new System.Drawing.Point(78, 12);
            this.titleInput.MaxLength = 20;
            this.titleInput.Name = "titleInput";
            this.titleInput.Size = new System.Drawing.Size(265, 26);
            this.titleInput.TabIndex = 0;
            this.titleInput.Text = "Test";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Font = new System.Drawing.Font("微软雅黑", 10.5F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(134)));
            this.label2.Location = new System.Drawing.Point(27, 15);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(45, 20);
            this.label2.TabIndex = 4;
            this.label2.Text = "Title :";
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 12F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(377, 310);
            this.Controls.Add(this.titleInput);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.messageInput);
            this.Controls.Add(this.delayTimeInput);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.button1);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedSingle;
            this.Name = "Form1";
            this.Text = "MessagePigeon - Popup Debug";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.TextBox delayTimeInput;
        private System.Windows.Forms.TextBox messageInput;
        private System.Windows.Forms.TextBox titleInput;
        private System.Windows.Forms.Label label2;
    }
}

